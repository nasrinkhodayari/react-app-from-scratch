import React from "react";
import {render} from "react-dom";
import bbWidget from "@baam/lib-bb-widget";
import Template from "./theme";
import resources from "../locale/resources";
import App from "./app";
import "../style/base.less";

(window).buildWidget = (widgetInstance) => {
    render(
        <Template resources={resources}>
            <App widget={bbWidget(widgetInstance)} />
        </Template>,
        widgetInstance.body);
};
