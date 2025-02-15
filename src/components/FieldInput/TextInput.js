import React, { useContext, useEffect } from "react";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";

const TextInput = ({ placeholder, onChange, data, nodeData, validate }) => {
  const preventPropagation = (e) => e.stopPropagation();

  const { openEditor } = useContext(ControllerOptionsContext);

  return (
    <div className={styles.wrapper}>
      <input
        onChange={({ target }) => {
          if (validate(target.value)) onChange(target.value);
          else target.value = data;
        }}
        value={data}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      {openEditor && (
        <button
          className={styles.expander}
          onClick={() => {
            document.activeElement.blur();
            openEditor(data, onChange, nodeData);
          }}
        />
      )}
    </div>
  );
};

export default TextInput;
