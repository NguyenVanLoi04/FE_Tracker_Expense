import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  components,
  ControlProps,
  GroupBase,
  StylesConfig,
} from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";
import { IBaseResponse } from "src/common/interfaces/response.interface";

interface ISearchParams {
  except?: number;
  page?: number;
  size?: number;
}

type IProps = {
  name: string;
  getAsyncData: any;
  placeholder: string;
  searchParams?: ISearchParams;
  searchKey?: string;
  error: any;
  required?: boolean;
  disabled?: boolean;
};

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }: any) => {
  return (
    // @ts-ignore
    <ValueContainer {...props}>
      {/* @ts-ignore */}
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.key !== "placeholder" ? child : null
      )}
    </ValueContainer>
  );
};

export const RHFSelectPaginationSingle = ({
  name,
  getAsyncData,
  placeholder,
  searchParams,
  searchKey = "searchText",
  error,
  required,
  disabled,
}: IProps) => {
  const [isFocus, setFocus] = useState<boolean>(false);

  const { control } = useFormContext();

  const loadOptions = async (
    search: string,
    loadedOptions: any,
    { page }: { page: number }
  ) => {
    const response: IBaseResponse<any> = await getAsyncData({
      ...searchParams,
      page: 1,
      limit: 20,
      [searchKey]: search,
    });

    const optionSelects = response.response?.map((item: any) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

    return {
      options: optionSelects,
      additional: {
        page: page + 1,
      },
    };
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <AsyncPaginate
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            debounceTimeout={1000}
            placeholder={placeholder}
            value={value}
            additional={{ page: 0 }}
            loadOptions={
              // @ts-ignore
              loadOptions as unknown as LoadOptions<
                unknown,
                GroupBase<unknown>,
                { page: number }
              >
            }
            onChange={onChange}
            styles={colourStyles(isFocus, error, name)}
            components={{
              ValueContainer: CustomValueContainer,
            }}
            required={required}
            isDisabled={disabled}
          />
        );
      }}
    />
  );
};

const colourStyles = (isFocus: boolean, error: any, name: string) => {
  const styles: StylesConfig = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: "primary",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid black",
      },
      border: error[name]?.message
        ? "1.5px solid #f9342eff!important"
        : (isFocus as unknown as ControlProps<boolean>)
        ? "2px solid #465eb2!important"
        : !state.hasValue || !state.selectProps.inputValue
        ? "1px solid #e2dbdb"
        : "1px solid #465eb2!important",
    }),
    container: (provided, state) => ({
      ...provided,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      overflow: "visible",
      padding: 10,
      color: (isFocus as unknown as ControlProps<boolean>) && "black!important",
    }),

    placeholder: (base, state) => ({
      ...base,
      position: "absolute",
      paddingInline:
        (state.hasValue ||
          state.selectProps.inputValue ||
          (isFocus as unknown as ControlProps<boolean>)) &&
        "8px",
      backgroundColor:
        state.hasValue ||
        state.selectProps.inputValue ||
        (isFocus as unknown as ControlProps<boolean>)
          ? "white"
          : "primary",
      top: state.hasValue
        ? "-22px"
        : state.selectProps.inputValue
        ? "-22px"
        : (isFocus as unknown as ControlProps<boolean>)
        ? "-22px"
        : "10%",

      transition: "top 0.2s, font-size 0.2s",
      fontSize:
        (state.hasValue ||
          state.selectProps.inputValue ||
          (isFocus as unknown as ControlProps<boolean>)) &&
        12,
      color: error[name]?.message
        ? "#f9342eff!important"
        : (isFocus as unknown as ControlProps<boolean>)
        ? "#465eb2"
        : state.hasValue || state.selectProps.inputValue
        ? "#919EAB"
        : "#919eab",
    }),
  };
  return styles;
};
