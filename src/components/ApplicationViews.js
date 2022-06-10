import React from "react"
import { Route } from "react-router-dom"
import { EntriesList } from "./JournalEntries/JournalEntriesListAll"
import { MoodtagsList } from "./MoodTags/MoodTagsList"
import { TechtagsList } from "./TechTags/TechTagsList"
import { DevelopersList } from "./Developers/DevelopersList"
import { EntryCreateForm } from "./JournalEntries/JournalEntriesCreateForm"
import { MoodTagNewForm } from "./MoodTags/MoodTagsCreateForm"
import { TechtagNewForm } from "./TechTags/TechTagsCreateForm"

export const ApplicationViews = () => {
    return <>
        <main>
           

                <Route exact path="/">
                    <EntriesList />
                </Route>

                <Route exact path="/entries">
                    <EntriesList />
                </Route>

                <Route exact path="/entrynewform">
                    <EntryCreateForm />
                </Route>

                <Route exact path="/moodtags">
                    <MoodtagsList />
                </Route>

                <Route exact path="/moodtagnewform">
                    <MoodTagNewForm />
                </Route>

                <Route exact path="/techtags">
                    <TechtagsList />
                </Route>

                <Route exact path="/techtagnewform">
                    <TechtagNewForm />
                </Route>

                <Route exact path="/developers">
                    <DevelopersList />
                </Route>


        </main>
    </>
}
