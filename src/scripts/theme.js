import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { jssPreset, createGenerateClassName } from "@material-ui/styles";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { create, Jss, GenerateId } from "jss";
import rtl from "jss-rtl";

export const seed = generateId();

export function generateId(length = 4) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const createGenerateId = () => {
    let counter = 0;
    return (rule, sheet) => `${seed}-${rule.key}-${counter++}`;
};

// export const direction = (window ).b$.portal.direction;
export const direction = 'rtl';

// export const locale = (window ).b$.portal.locale;
export const locale = 'fa-IR';

// export const isDesignMode = (window ).b$.portal.designMode;

export const isRtl = direction === "rtl";

export const jss = create({ plugins: [...jssPreset().plugins] }).use(rtl({ enabled: isRtl })).setup({ createGenerateId });

export const theme = createMuiTheme({ direction, typography: { fontFamily: "inherit" } });

export const i18n = i18next.createInstance();

export const Template = (props) => {
    const generateClassName = createGenerateClassName({ disableGlobal: true, productionPrefix: "", seed });
    i18n.init({ lng: locale, resources: props.resources });

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <StylesProvider generateClassName={generateClassName} jss={jss}>
                    <I18nextProvider i18n={i18n}>
                        {props.children}
                    </I18nextProvider>
                </StylesProvider>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Template;