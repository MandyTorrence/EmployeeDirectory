import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from "../utils/GlobalContext";
import EmployeeRow from "./EmployeeRow";
import "../styles/style.css";

const EmployeeTable = () => {
    const context = useContext(GlobalContext);


    return (
        <table id="table" >
            <thead>
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th
                                className="col"
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    // context.handleSort(name.toLowerCase());
                                    context.handleSort(name);
                                }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>
            </thead>

            <EmployeeRow />
        </table>
    );
};
export default EmployeeTable;