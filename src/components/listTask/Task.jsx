import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { pink, amber } from "@mui/material/colors";
import { CgMoreVerticalO } from "react-icons/cg";

export const Task = ({ task }) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  return render ? (
    <li className="flex justify-between items-center">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: pink[200],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          label={task.info}
        />
      </FormGroup>
      {task.important ? (
        <div className="text-pink-600 dark:text-[#ff5d01] transition-colors duration-1000">
          important!
        </div>
      ) : (
        <></>
      )}
      <CgMoreVerticalO className="cursor-pointer" />
    </li>
  ) : (
    <></>
  );
};
