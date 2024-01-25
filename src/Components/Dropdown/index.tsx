import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import { Icons } from "..";

type CustomDropdownProps = {
  defaultSelection: string;
  possibleOptions: any[];
  customOnChange: React.Dispatch<React.SetStateAction<any>>;
};

const CustomDropdown = ({
  defaultSelection,
  possibleOptions,
  customOnChange,
}: CustomDropdownProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(defaultSelection);
  const selectionRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);

  const updateSelection = (choice: string) => {
    setSelectedChoice(choice);
    customOnChange(choice);
    setOpenOptions(false);
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (openOptions) {
        if (!selectionRef?.current?.contains(e.target as HTMLDivElement)) {
          setOpenOptions(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       selectionRef?.current?.click();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       optionRef?.current?.click();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.Dropdown}>
        <div
          className={styles.Selection}
          tabIndex={0}
          onClick={() => setOpenOptions(!openOptions)}
          ref={selectionRef}
        >
          <div className={styles.text_header}>
            <p className={styles.selected_option}>{selectedChoice}</p>
          </div>
          <Icons width="10" height="6" id="dropdown_open" />
        </div>

        {openOptions ? (
          <div className={styles.Options}>
            {possibleOptions.map((possibleOption) => {
              return (
                <div
                  className={styles.single_option_contianer}
                  onClick={() => updateSelection(possibleOption)}
                  tabIndex={0}
                  key={possibleOption}
                  ref={optionRef}
                >
                  <p key={possibleOption} className={styles.option_text}>
                    {possibleOption}
                  </p>

                  {selectedChoice === possibleOption ? (
                    <Icons width="20" height="20" id="check_mark" />
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;
