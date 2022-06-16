import React from "react"
import { Route } from "react-router-dom"
import { EntriesList } from "./JournalEntries/JournalEntriesListAll"
import { MyEntriesList } from "./JournalEntries/JournalEntriesListMine"
import { EntryCreateForm } from "./JournalEntries/JournalEntriesCreateForm"
import { EntryEditForm } from "./JournalEntries/JournalEntriesEditForm"
import { SinglePublicEntryWithDetails } from "./JournalEntries/JournalEntryViewDetails"
import { MoodtagsList } from "./MoodTags/MoodTagsList"
import { MoodTagNewForm } from "./MoodTags/MoodTagsCreateForm"
import { TechtagsList } from "./TechTags/TechTagsList"
import { TechtagNewForm } from "./TechTags/TechTagsCreateForm"
import { TechEditForm } from "./TechTags/TechTagsEditForm"
import { DevelopersList } from "./Developers/DevelopersList"
import { MoodEditForm } from "./MoodTags/MoodTagsEditForm"

export const ApplicationViews = () => {
    return <>
        <main>
           

                <Route exact path="/">
                    <EntriesList />
                </Route>

                <Route exact path="/entries">
                    <EntriesList />
                </Route>

                <Route exact path="/myentrieslist">
                    <MyEntriesList />
                </Route>

                <Route exact path="/entrynewform">
                    <EntryCreateForm />
                </Route>

                <Route exact path="/viewentry/:id(\d+)">
                    <SinglePublicEntryWithDetails />
                </Route>

                <Route exact path="/editentry/:id(\d+)">
                    <EntryEditForm />
                </Route>
            
                <Route exact path="/moodtags">
                    <MoodtagsList />
                </Route>

                <Route exact path="/moodtagnewform">
                    <MoodTagNewForm />
                </Route>

                <Route exact path="/moodedit/:id(\d+)">
                    <MoodEditForm />
                </Route>

                <Route exact path="/techtags">
                    <TechtagsList />
                </Route>

                <Route exact path="/techtagnewform">
                    <TechtagNewForm />
                </Route>

                <Route exact path="/techtagedit/:id(\d+)">
                    <TechEditForm />
                </Route>

                <Route exact path="/developers">
                    <DevelopersList />
                </Route>


        </main>
    </>
}
