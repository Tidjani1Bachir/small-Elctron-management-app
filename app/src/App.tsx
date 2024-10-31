import React, { useState, useEffect } from "react";

import EditableNumber from "./EditableNumber";
import EditableParagraph from "./EditableParagraph";
import EditableTextForRecherche from "./EditableTextForRecherche";
import RechercherParPrenom from "./RechercherParPrenom";
import RechercherParNomEtPrenom from "./RechercherParNomEtPrenom";
import { user1 } from "./user1";
import "./index.css";
function App() {
  const [users, setUsers] = useState<user1[]>([]);

  // States for forms to add infos
  const [nbrClient, setNbrClient] = useState(0);
  const [nom, setNom] = useState("");
  const [trouverParNom, setTrouverParNom] = useState("");
  const [trouverParPrenom, setTrouverParPrenom] = useState("");
  const [trouverParNomEtPrenom, setTrouverParNomEtPrenom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nbrSession, setNbrSession] = useState(0);
  const [medicine, setMedicine] = useState("");
  const [cituation, setCituation] = useState("");

  const [chanageMainPageColor, setchanageMainPageColor] = useState(false);

  const [removeHeader, setRemoveHeader] = useState(false);
  const [removeMainPage, setremoveMainPage] = useState(false);
  const [removeAddUsersForm, setRemoveAddUsersForm] = useState(true);

  const [removeMainUsers, setRemoveMainUsers] = useState(false);

  const AddUser = () => {
    // add class to change the color of the main page
    setchanageMainPageColor(!chanageMainPageColor);
    //add classes to remove the header and the main content
    setRemoveHeader(!removeHeader);
    // add class to remove the main page
    setremoveMainPage(!removeMainPage);
    setRemoveAddUsersForm(!removeAddUsersForm);
  };
  const addNewUser = () => {
    // add class to change the color of the main page
    setchanageMainPageColor(!chanageMainPageColor);
    //add classes to remove the header and the main content
    setRemoveHeader(!removeHeader);
    // add class to remove the main page
    setremoveMainPage(!removeMainPage);
    setRemoveAddUsersForm(!removeAddUsersForm);

    setUsers([
      ...users,
      {
        nbrClient: nbrClient,
        nom: nom,
        prenom: prenom,
        nbrSession: nbrSession,
        medicine: medicine,
        cituation: cituation,
      },
    ]);
    // setHaveUsers(true)
    //  console.log(users);
  };

  // delete a user button
  const removeUser = (index: number) => {
    setUsers(users.filter((user) => user.nbrClient !== index));
    // setUsers(users.splice(index, 1))
  };
  return (
    <div
      className={`flex flex-col h-screen relative items-center w-screen  ${
        chanageMainPageColor ? "bg-gray-300" : ""
      }`}
    >
      <button className="ml-1500" onClick={AddUser}>
        اضافةزبون جديد
      </button>
      <header
        className={`bg-background border-b flex items-center justify-between px-6 py-4 ${
          removeHeader ? "hidden" : ""
        }`}
      >
        <h1 className="text-2xl font-bold">ادارة الزبائن</h1>
      </header>
      {/* form */}
      <div
        className={`mt-[150px] absolute z-10 rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto bg-slate-100 ${
          removeAddUsersForm ? "hidden" : ""
        }`}
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">
            بينات الزبون
          </h3>
        </div>
        <div className="p-6">
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="pl-130 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="nbrClient"
                >
                  رقم الزبون
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="nbrClient"
                  placeholder="Enter number of clients"
                  type="number"
                  // value={nbrClient}
                  onChange={(e) => setNbrClient(parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="pl-150 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="nom"
                >
                  اللقب
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="nom"
                  placeholder="Enter client's name"
                  // value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="pl-160 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="prenom"
                >
                  الاسم
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="prenom"
                  placeholder="Enter client's surname"
                  // value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="pl-110 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                  htmlFor="nbrSession"
                >
                  عدد الحصص
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="nbrSession"
                  placeholder="Enter number of sessions"
                  type="number"
                  // value={nbrSession}
                  onChange={(e) => setNbrSession(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="relative space-y-5 py-[100px]">
              <label
                className="absolute top-1 right-5 -my-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="medicine"
              >
                العلاج
              </label>
              <input
                className="absolute top-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="medicine"
                placeholder="Enter client's medicine"
                // value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
              />
              <label
                className="absolute top-14 right-5 my-5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="cituation"
              >
                الحالة
              </label>
              <input
                className="absolute top-20 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="medicine"
                placeholder="Enter client's cituation"
                // value={cituation}
                onChange={(e) => setCituation(e.target.value)}
              />
            </div>
          </form>

          <button
            className="absolute bottom-8 left-[200px]"
            onClick={addNewUser}
          >
            اضافة
          </button>
        </div>
      </div>

      <nav className=" grid grid-cols-4 gap-2 fixed mt-24   ">
        
        <EditableTextForRecherche text={trouverParNom} />
        <RechercherParPrenom text={trouverParPrenom} />
        <RechercherParNomEtPrenom text={trouverParNomEtPrenom} />
        <button>trouver</button>
      </nav>

      {/* users content */}
      <main
        className={`flex-1 overflow-auto p-6 border rounded-lg w-full  mt-24 ${
          removeMainPage ? "hidden" : ""
        }`}
      >
        <ul className="">
          <li className="flex justify-between w-full px-20">
            <span className="font-medium flex justify-center "><span className="">
            التاريخ
              </span></span>
            <span className="font-medium ">ادارة مستخدم</span>

            <span className="font-medium w-1/7">الحالة</span>
            <span className="font-medium w-1/7 relative">
            <span className="absolute left-6">
            العلاج
            </span>
            </span>
            <span className="font-medium w-1/7 px-3 -mr-14 ">عدد الحصص</span>
            <span className="font-medium w-1/7 px-11">اللقب </span>
            <span className="font-medium w-1/7">الاسم </span>
            <span className="font-medium w-1/7">رقم الزبون</span>
          </li>

          {users?.map(
            ({ nbrClient, nom, prenom, nbrSession, medicine, cituation },index) => (
              
              // <li className="" key={index}>
              
        <li
     className={`grid grid-cols-8 ${
         removeMainUsers ? "hidden" : ""
       }`} key={index}>
        <span className=" flex justify-center">
          <span>
          date
          </span>
        </span>
                <button onClick={() => removeUser(nbrClient)}>
                  حذف مستخدم
                </button>

                <EditableParagraph text={cituation} />

                <EditableParagraph text={medicine} />

                <EditableNumber num={nbrSession} />

                <EditableParagraph text={nom} />

                <EditableParagraph text={prenom} />

                <EditableNumber num={nbrClient} />
              </li>
              
            )
          )}

          {trouverParNom &&
            users?.map(
              ({ nbrClient, nom, prenom, nbrSession, medicine, cituation }) => (
                trouverParNom === nom  ?(<li className="grid grid-cols-7   " key={nbrClient}>
                  <button onClick={() => removeUser(nbrClient)}>
                    حذف مستخدم
                  </button>

                  <EditableParagraph text={cituation} />

                  <EditableParagraph text={medicine} />

                  <EditableNumber num={nbrSession} />

                  <EditableParagraph text={nom} />

                  <EditableParagraph text={prenom} />

                  <EditableNumber num={nbrClient} />
                </li>): ""
              )
            )}
        </ul>
      </main>
    </div>
  );
}

export default App;
