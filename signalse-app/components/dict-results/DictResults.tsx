import { SignsByLetter, toSignUI } from "../../model/domain/signs/sign";
import DictResultsPanel from "../dict-results-panel/DictResultsPanel";

interface DictResultsProps {
  signsResult: SignsByLetter;
  displayMode: string;
  showLocked: boolean;
}

export default function DictResults({
  signsResult,
  displayMode,
  showLocked,
}: DictResultsProps) {
  const allLetters = Object.keys(signsResult)
    .filter(
      (l) =>
        signsResult[l].accessible.length > 0 ||
        (showLocked && signsResult[l].locked.length > 0),
    )
    .sort();

  return (
    <>
      {allLetters.map((letter) => {
        const { accessible, locked } = signsResult[letter];
        const signs = [...accessible, ...(showLocked ? locked : [])].map(toSignUI);
        return (
          <DictResultsPanel
            key={letter}
            letter={letter}
            signs={signs}
            displayMode={displayMode}
          />
        );
      })}
    </>
  );
}
