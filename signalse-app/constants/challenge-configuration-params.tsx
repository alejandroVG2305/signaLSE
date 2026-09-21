import { ComponentType } from "react";
import { BasketballIcon } from "../components/svg/BasketballIcon";
import { CalendarIcon } from "../components/svg/CalendarIcon";
import { CarIcon } from "../components/svg/CarIcon";
import { ClothesIcon } from "../components/svg/ClothesIcon";
import { ComputerMouseIcon } from "../components/svg/ComputerMouseIcon";
import { GreetIcon } from "../components/svg/GreetIcon";
import { HeartIcon } from "../components/svg/HeartIcon";
import { MoneyIcon } from "../components/svg/MoneyIcon";
import i18n from "../i18n";
import { AppSvgProps } from "../components/svg/app-svg-props";
import { ColorPaletteIcon } from "../components/svg/ColorPaletteIcon";

interface Category {
  id: string;
  label: string;
  Icon: ComponentType<AppSvgProps>;
}

export const getDifficultyOptions = () => [
  i18n.t("difficulty.easy"),
  i18n.t("difficulty.normal"),
  i18n.t("difficulty.hard"),
];

export const TIME_OPTIONS = ["10s", "15s", "20s", "30s", "45s"];
export const QUESTION_COUNT_OPTIONS = ["3", "5", "8", "10", "15"];

export const DEFAULT_DIFFICULTY = i18n.t("difficulty.normal");
export const DEFAULT_TIME = "20s";
export const DEFAULT_QUESTION_COUNT = "8";

export const CHALLENGE_CATEGORIES: Category[] = [
  { id: "courtesy", label: "Cortesía", Icon: GreetIcon },
  { id: "sports", label: "Deportes", Icon: BasketballIcon },
  { id: "company", label: "Trabajo", Icon: MoneyIcon },
  { id: "family", label: "Familia", Icon: HeartIcon },
  { id: "dates", label: "Fechas", Icon: CalendarIcon },
  { id: "internet", label: "Internet", Icon: ComputerMouseIcon },
  { id: "clothing", label: "Ropa", Icon: ClothesIcon },
  { id: "transport", label: "Transporte", Icon: CarIcon },
  { id: "colors", label: "Colores", Icon: ColorPaletteIcon },
];
