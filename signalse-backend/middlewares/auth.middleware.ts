import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

export interface AuthRequest extends Request{
    uid?: string;
}

export interface AuthenticatedRequest extends AuthRequest {
    uid: string;
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.uid) {
        res.status(401).json({ error: "errors.userNotAuthenticated" });
        return;
    }
    next();
};

// Main middleware
export const verifyFirebaseToken = 
    async(req:AuthRequest, res:Response, next: NextFunction) : Promise<void> => {
        try{
            // Get token from HTTP header
            const authHeader = req.headers.authorization;
            if(!authHeader || !authHeader.startsWith('Bearer ')){
                res.status(401).json({error: 'Unauthorized. Token is missing.'});
                return;
            }
            const token = authHeader.split(' ')[1];
    
            // Verify JWT token
            const decodedToken = await new Promise<jwt.JwtPayload>((resolve, reject) => {
                jwt.verify(token, getKey, {
                    audience: process.env.PROJECT_ID,
                    issuer: `https://securetoken.google.com/${process.env.PROJECT_ID}`,
                    algorithms: ['RS256']
                }, (err, decoded) => {
                    if (err) return reject(err);
                    resolve(decoded as jwt.JwtPayload);
                });
            });
    
            // In JWT Firebase tokens, user UID is in claim 'sub' (subject)
            req.uid = decodedToken.sub;

            next();
        } catch(error : any){
            if(error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError'){
                res.status(401).json({error: 'Invalid or expired token.'});
                return;
            }
            res.status(500).json({message: 'Internal error server during authentication'});
        }
    };

// JWKS client
const client = jwksClient({
    jwksUri: 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'
});

const getKey = (header: jwt.JwtHeader, callback:jwt.SigningKeyCallback)=>{
    client.getSigningKey(header.kid, (err, key) => {
        const signingKey = key?.getPublicKey();
        callback(err, signingKey);
    });
}

