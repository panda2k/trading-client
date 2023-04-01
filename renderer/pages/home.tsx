import React from "react";
import Head from "next/head";
import AccountDetail from "../components/AccountDetail";
import Login from "../components/Login";
import { useAtomValue } from "jotai";
import { accountUsername } from "../utils/atoms";

const Home = () => {
    const username = useAtomValue(accountUsername);

    return (
        <React.Fragment>
            <Head>
                <title>Panda Trade</title>
            </Head>
            <div className="flex flex-col justify-center items-center">
                {username ? <AccountDetail /> : <Login />}
            </div>
        </React.Fragment>
    );
};

export default Home;
