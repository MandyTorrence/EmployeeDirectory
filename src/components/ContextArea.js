import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import GlobalContext from "../utils/GlobalContext";
import EmployeeTable from "./EmployeeTable";
import searchContext from '../utils/SearchContext';
import "../styles/style.css";

const ContextArea = () => {

    const [users, setUsers] = useState([]);
    const [searches, setSearch] = useState({
        search: "",
        type: "all",
        onClick: (search) => {
            setSearch({
                ...searches,
                search
            });
        },
        onChange: (type, search) => {
            if (type === "search" && search === "") {
                type = "all";
            }
            setSearch({
                ...searches,
                search,
                type
            });
        }
    })

    useEffect(() => {
        API.getUsers()
            .then((res) => {
                setUsers(res);
            })
    }, []);

    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: [
            { name: "picture", width: "20%", order: "descend" },
            { name: "name", width: "20%", order: "descend" },
            { name: "phone", width: "20%", order: "descend" },
            { name: "email", width: "20%", order: "descend" },
            { name: "dob", width: "20%", order: "descend" },
        ]
    });

    const handleSort = heading => {
        let currentOrder = developerState.headings
            .filter(elem => elem.name === heading)
            .map(elem => elem.order)
            .toString();

        if (currentOrder === "descend") {
            currentOrder = "ascend";
        } else {
            currentOrder = "descend";
        }

        const filterFunc = (a, b) => {
            if (currentOrder === "ascend") {
                // missing value for filter
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // order filter
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else if (heading === "dob") {
                    return a[heading].age - b[heading].age;
                } else {
                    return a[heading].localeCompare(b[heading]);
                }
            } else {
                // missing value for filter
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // order filter
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else if (heading === "dob") {
                    return b[heading].age - a[heading].age;
                } else {
                    return b[heading].localeCompare(a[heading]);
                }
            }
        };
        const sortedUsers = developerState.filteredUsers.sort(filterFunc);
        const updatedHeadings = developerState.headings.map(elem => {
            elem.order = elem.name === heading ? currentOrder : elem.order;
            return elem;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers,
            headings: updatedHeadings
        })
    };
    function handleSearchChange(event) {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            console.log(filter, values)
            if (values.indexOf(filter.toLowerCase()) !== -1) {
                return item
            };
        });

        setDeveloperState({ ...developerState, filteredUsers: filteredList });
    };

    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results);
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);


    return (
        <GlobalContext.Provider value={{ developerState, handleSort }} >
            <searchContext.Provider value={searches}>
                <div className="employeetable">
                    {developerState.filteredUsers.length > 0 ? <EmployeeTable /> : <div></div>}
                </div>
            </searchContext.Provider>
        </GlobalContext.Provider>

    );
};
export default ContextArea;