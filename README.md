# React useEffect Hook Data Modification Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook and data handling. The bug arises from improperly fetching and modifying data within the `useEffect` hook, potentially leading to unpredictable behavior and state inconsistencies.  The solution provides a corrected approach to handle asynchronous data fetching and state updates safely and efficiently.

## Bug Description

The original code attempts to fetch data using `fetch` and directly modify the fetched data before updating the component's state.  This approach bypasses React's state management system and can lead to unexpected behavior and race conditions.

## Solution

The solution demonstrates the correct way to handle asynchronous data fetching using `useEffect` and React's state management system.  The solution uses async/await and avoids directly modifying the fetched data. The solution also addresses the potential for race condition by using the previous state.