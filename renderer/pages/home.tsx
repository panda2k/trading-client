import React from "react";
import Head from "next/head";
import AccountDetail from "../components/AccountDetail";
import Login from "../components/Login";
import { instance as api } from "../utils/ironbeam/api";

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Panda Trade</title>
            </Head>
            <div className="flex flex-col justify-center items-center">
                {api.isConnected() ? <AccountDetail /> : <Login />}
            </div>
        </React.Fragment>
    );
};

export default Home;
