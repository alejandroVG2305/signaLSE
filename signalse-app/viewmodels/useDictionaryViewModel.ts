import { useEffect, useState } from "react";
import { getCurrentAlphabet } from "../constants/alphabets";
import { SignsByLetter } from "../model/domain/signs/sign";
import i18n from "../i18n";
import useLoading from "../hooks/useLoading";
import { signService } from "../model/services/signs.service";

const getGroupLetter = (term: string): string => {
  const match = term.match(/\p{L}/u);
  return match ? match[0] : term[0];
};

export function useDictionaryViewModel() {
  const alphabet = getCurrentAlphabet();
  const categoryAll = i18n.t("all");
  const { isLoading, withLoading } = useLoading();

  const [categories, setCategories] = useState<string[]>([categoryAll]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([
    alphabet[0],
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    categoryAll,
  ]);
  const [searchText, setSearchText] = useState<string>("");
  const [displayMode, setDisplayMode] = useState<string>("grid");
  const [signs, setSigns] = useState<SignsByLetter>({});
  const [signsResult, setSignsResult] = useState<SignsByLetter>({});
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [showLocked, setShowLocked] = useState<boolean>(false);
  const [showFab, setShowFab] = useState(false);

  const toggleShowLocked = () => {
    setShowLocked(!showLocked);
  };

  const fetchCategories = async (): Promise<void> => {
    await withLoading(async () => {
      const result = await signService.getCategories();
      if (result.ok) {
        setCategories([categoryAll, ...result.data]);
      }
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchSigns = async (): Promise<void> => {
    await withLoading(async () => {
      const result = await signService.getSigns({
        categories:
          selectedCategories[0] === categoryAll ? [] : selectedCategories,
        initialLetters: selectedLetters,
      });
      if (!result.ok) return;
      const grouped = result.data.reduce<SignsByLetter>((acc, s) => {
        const key = getGroupLetter(s.term);
        acc[key] ??= { accessible: [], locked: [] };
        if (s.canUserAccess) acc[key].accessible.push(s);
        else acc[key].locked.push(s);
        return acc;
      }, {});
      setSigns(grouped);
      filterSignsBySearchText(grouped);
    });
  };

  const countResults = (
    source: SignsByLetter,
    includeLocked: boolean,
  ): number =>
    Object.values(source).flatMap((g) =>
      includeLocked ? [...g.accessible, ...g.locked] : g.accessible,
    ).length;

  const filterSignsBySearchText = (source: SignsByLetter = signs) => {
    if (!searchText.trim()) {
      setSignsResult(source);
      setNumberOfResults(countResults(source, showLocked));
      return;
    }
    const lower = searchText.toLowerCase();
    const filtered: SignsByLetter = {};
    for (const [letter, group] of Object.entries(source)) {
      const accessible = group.accessible.filter((s) =>
        s.term.toLowerCase().includes(lower),
      );
      const locked = group.locked.filter((s) =>
        s.term.toLowerCase().includes(lower),
      );
      if (accessible.length > 0 || locked.length > 0) {
        filtered[letter] = { accessible, locked };
      }
    }
    setSignsResult(filtered);
    setNumberOfResults(countResults(filtered, showLocked));
  };

  useEffect(() => {
    fetchSigns();
  }, [selectedCategories, selectedLetters]);

  useEffect(() => {
    filterSignsBySearchText();
  }, [searchText]);

  useEffect(() => {
    setNumberOfResults(countResults(signsResult, showLocked));
  }, [showLocked]);

  const getSelection = (
    selectedList: string[],
    selected: string,
    allowsEmpty: boolean = true,
  ): string[] => {
    if (selectedList.includes(selected)) {
      const filteredList = selectedList.filter((s) => s !== selected);
      return !allowsEmpty
        ? selectedList.length > 1
          ? filteredList
          : selectedList
        : filteredList;
    } else {
      return [...selectedList, selected];
    }
  };

  const toggleLetterSelection = (letter: string): void => {
    setSelectedLetters(getSelection(selectedLetters, letter));
  };

  const clearSelectedLetters = (): void => {
    setSelectedLetters([]);
  };

  const toggleCategorySelection = (category: string): void => {
    if (category === categoryAll) {
      setSelectedCategories([categoryAll]);
    } else {
      setSelectedCategories(
        getSelection(
          selectedCategories.filter((cat) => cat !== categoryAll),
          category,
          false,
        ),
      );
    }
  };

  return {
    alphabet,
    categories,
    selectedLetters,
    selectedCategories,
    toggleLetterSelection,
    clearSelectedLetters,
    toggleCategorySelection,
    searchText,
    setSearchText,
    displayMode,
    setDisplayMode,
    signsResult,
    numberOfResults,
    showLocked,
    toggleShowLocked,
    setShowFab,
    showFab,
    isLoading,
  };
}
