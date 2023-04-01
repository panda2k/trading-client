import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { accountUsername } from "../utils/atoms";
import { instance as api } from "../utils/ironbeam/api";
import { AccountBalance } from "../utils/ironbeam/types";

const AccountDetail = () => {
    const username = useAtomValue(accountUsername);
    const [accountBalance, setAccountBalance] = useState<AccountBalance[]>();
    const [currentAccount, setCurrentAccount] = useState<number>(0);

    useEffect(() => {
        api.getAccountBalance((data) => {
            setAccountBalance((data as any).BALANCES as AccountBalance[]);
        });
    }, []);

    return (
        <div className="flex flex-col">
            <h2>
                Account: {username}
            </h2>
            <h2>
                Total Balance:
                {" " + accountBalance?.[currentAccount].TOTAL_EQUITY}
            </h2>
            <h2>
                Total Margin: COMING SOON
            </h2>
            <h2>
                Open P/L: COMING SOON
            </h2>
            <h2>
                Day P/L: COMING SOON
            </h2>
        </div>
    );
};

export default AccountDetail;

