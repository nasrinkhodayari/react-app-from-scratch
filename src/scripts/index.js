import React from "react";
import ReactDOM from "react-dom";
import bbWidget from "@baam/lib-bb-widget";
import Template from "./theme";
import resources from "../locale/resources";
import App from "./app";

(window).userTestWidget = (widgetInstance) => {
    ReactDOM.render(
        <Template resources={resources}>
            <App widget={bbWidget(widgetInstance)} />
        </Template>,
        widgetInstance.body);
};