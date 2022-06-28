import React from "react";
import styles from "./../styles/vendingMachine.module.css";
import "bulma/css/bulma.css";
import Head from "next/head";
import Web3 from "web3";

function vendingMachine() {
  let web3;
  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Connect to metamask");
    }
  };
  return (
    <div className={styles.main}>
      <Head>
        <title>Vending Machine</title>
        <meta name='description' content='A blockchain vending app' />
      </Head>
      <nav className='navbar mt-4 mb-4'>
        <div className='container'>
          <div className='navbar-brand'>
            <h1>Vending Machine</h1>
          </div>
          <div className='navbar-end'>
            <button
              onClick={connectWalletHandler}
              className='button is-primary'
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <section>
        <div className='container'>
          <p>Placeholder text</p>
        </div>
      </section>
    </div>
  );
}

export default vendingMachine;
