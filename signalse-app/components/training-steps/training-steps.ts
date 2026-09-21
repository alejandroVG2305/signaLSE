import i18n from "../../i18n";

const STEP_IMAGES = {
  trainingStep1: require("../../assets/steps/training/trainingStep1.png"),
  trainingStep2: require("../../assets/steps/training/trainingStep2.png"),
  trainingStep3: require("../../assets/steps/training/trainingStep3.png"),
} as const;

type StepKey = keyof typeof STEP_IMAGES;

export const TRAINING_STEPS = (Object.keys(STEP_IMAGES) as StepKey[]).map(
  (key, index) => ({
    id: key,
    step: index + 1,
    label: i18n.t(`trainingSteps.${key}`),
    image: STEP_IMAGES[key],
  }),
);
