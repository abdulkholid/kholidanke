import React, { useState } from "react";
import FormElement from "./FormElement";
import { Search } from "react-feather";
import { router, useForm, usePage } from "@inertiajs/react";

const FilterInvitation = ({ event_sessions }) => {
    const params = new URLSearchParams(window.location.search);
    const { data, setData } = useForm({
        name: params.has("name") ? params.get("name") : "",
        event_session_id: params.has("event_session_id")
            ? params.get("event_session_id")
            : "",
    });
    const [filter, setFilter] = useState(
        params.has("name") || params.has("event_session_id")
            ? "has_filter"
            : "no_filter"
    );
    const form_class = {
        no_filter: "bg-gray-300",
        has_filter: "bg-primary",
    };

    const handleChangeFilterValue = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmitfilter = (e) => {
        e.preventDefault();
        router.get(route("admin.invitation.index"), data);
    };

    return (
        <form
            onSubmit={handleSubmitfilter}
            className={`${form_class[filter]} flex p-3 gap-2`}
        >
            <FormElement.TextInput
                name="name"
                placeholder="Cari nama tamu ..."
                onChange={handleChangeFilterValue}
                value={data.name}
            />
            <FormElement.SelectInput
                name="event_session_id"
                placeholder="-- Cari berdasarkan sesi --"
                data={event_sessions}
                onChange={handleChangeFilterValue}
                value={data.event_session_id}
            />
            <button
                type="submit"
                className={`${
                    filter === "no_filter"
                        ? "bg-gray-400"
                        : "bg-primary__darken"
                } text-white w-28 rounded flex items-center justify-center`}
            >
                <Search size={15} />
            </button>
        </form>
    );
};

export default FilterInvitation;
