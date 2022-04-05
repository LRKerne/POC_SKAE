import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { RootObject } from "./interfaces";

export default function Quiz2() {
  const [categories, setCategories] = useState<RootObject[]>();
  const [scoreByCategory, setScoreByCategory] = useState<any>([]);

  useEffect(() => {
    async function getCateriesWithQuestions() {
      const { data } = await api.get<RootObject[]>(
        "categories?_order=desc,asc"
      );
      setCategories(data);
    }
    getCateriesWithQuestions();
  }, []);

  return (
    <div>
      {categories?.map((category, index) => {
        return (
          <div key={Math.random() + index}>
            <h1>{category.name}</h1>

            <div>
              {category.questions.map((question, index) => {
                return (
                  <div key={Math.random() + index * 2}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        {question.name}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="1"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="2"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="3"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="4"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label="5"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
