import { Spin } from "antd";
import React from "react";
import "./Spinner.scss";

interface IAppLoading { }

const Spinner: React.FunctionComponent<IAppLoading> = (
    props: IAppLoading
) => {
    return (
        <div className="loader-view">
            <Spin size="large" />
        </div>
    );
};

export default Spinner;