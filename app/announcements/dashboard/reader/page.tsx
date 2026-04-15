"use client";

import { requireRole } from "@/lib/checkAuth";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';

// CHANGE to true for deploy and false for deploy
const ENABLE_TODAY_DATE_FILTER = false;
const ENABLE_WEEKDAY_GROUP_VIEW = true;
const WEEKDAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ReaderDashboard() {
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [numUnread, setNumUnread] = useState<number>();

    const getWeekday = (dateStr?: string) => {
        if (!dateStr) return "Unknown";
        const [year, month, day] = dateStr.split('-').map(Number);
        if (!year || !month || !day) return "Unknown";
        const localDate = new Date(year, month - 1, day);
        return localDate.toLocaleDateString("en-CA", { weekday: "long" });
    };

    const groupedByWeekday = announcements.reduce((groups: Record<string, any[]>, a: any) => {
        const weekday = getWeekday(a.date);
        if (!groups[weekday]) groups[weekday] = [];
        groups[weekday].push(a);
        return groups;
    }, {});

    useEffect(() => {
        requireRole('reader');
        fetchAnnouncements();
    }, [])

    useEffect(() => {
        setNumUnread(announcements.length);
    }, [announcements])

    const fetchAnnouncements = async () => {
        try {
            const res = await fetch('/api/announcements/all');
            const data = await res.json();
            const now = new Date();
            const today = now.toLocaleDateString("en-CA", { timeZone: "America/Toronto"})
            let unsorted = data.filter(
                (a: any) => a.approval === true && (!ENABLE_TODAY_DATE_FILTER || a.date == today)
            )
            unsorted.sort((a: any, b: any) => a.club.localeCompare(b.club, undefined, { sensitivity: 'base', ignorePunctuation: true }))
            setAnnouncements(unsorted);
        } catch (e) {
            console.error(e);
        }
    }

    const handleReadUnread = async (e: any) => {
        if (e.currentTarget.innerHTML == "‼️Unread‼️") {
            e.currentTarget.innerHTML = "Read ✅";
            e.currentTarget.style.fontWeight = "normal";
            e.currentTarget.title = "Mark as Unread"
            e.currentTarget.parentElement.parentElement.style.backgroundColor = "#F0FDF4";
            e.currentTarget.style.borderColor = "green";
            setNumUnread(numUnread!-1);
        }
        else {
            e.currentTarget.innerHTML = "‼️Unread‼️";
            e.currentTarget.style.fontWeight = "bold";
            e.currentTarget.title = "Mark as Read"
            e.currentTarget.parentElement.parentElement.style.backgroundColor = "#FDF2F2";
            e.currentTarget.style.borderColor = "red";
            setNumUnread(numUnread!+1);
        }
    }

    return (
        <div className="w-full">
            <div className="text-white custom-background-4 w-full gap-y-4 flex justify-center items-center flex-col text-center pt-40 py-8 mb-8">
                <h1 className="text-5xl font-bold mb-4">Reader Dashboard</h1>
                <h2 className="text-2xl">Welcome <strong>Reader</strong>!</h2>
            </div>
            <div className="w-full flex flex-col place-items-center px-4 my-12">
                {numUnread! > 0 ? `${numUnread} announcement(s) unread.` : "All announcements read."}
                {ENABLE_WEEKDAY_GROUP_VIEW ? (
                    <div className="w-full max-w-[48rem] my-12 space-y-8">
                        {WEEKDAY_ORDER.map((day) => (
                            <div key={day}>
                                <h3 className="text-xl font-bold mb-3">{day}</h3>
                                {(groupedByWeekday[day] && groupedByWeekday[day].length > 0) ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {groupedByWeekday[day].map((data: any, i: number) => (
                                            <div
                                                key={`${day}-${i}`}
                                                className="p-4 rounded-xl shadow-md"
                                                style={{
                                                    backgroundColor: "#FDF2F2"
                                                }}
                                            >
                                                <div className="flex justify-between place-items-start">
                                                    <div className="font-bold">{data.title}</div>
                                                    <button
                                                        className="w-32 font-bold border-2 rounded-xl select-none opacity-60"
                                                        title="Mark as Read"
                                                        onClick={(e) => handleReadUnread(e)}
                                                        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                                        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
                                                        style={{
                                                            borderColor: "red"
                                                        }}
                                                    >
                                                        ‼️Unread‼️
                                                    </button>
                                                </div>
                                                <div className="text-gray-500 w-full mb-4">
                                                    {data.club} • {data.date}
                                                </div>
                                                {data.description}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-gray-500">No announcements</div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 w-full max-w-[32rem] gap-4 my-12">
                        {announcements!.map((data, i) => 
                            <div 
                                key={i} 
                                className="p-4 rounded-xl shadow-md"
                                style={{
                                    backgroundColor: "#FDF2F2"
                                }}
                            >
                                <div className="flex justify-between place-items-start">
                                    <div className="font-bold">{data.title}</div>
                                    <button 
                                        className="w-32 font-bold border-2 rounded-xl select-none opacity-60"
                                        title="Mark as Read" 
                                        onClick={(e) => handleReadUnread(e)}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
                                        style={{
                                            borderColor: "red"
                                        }}
                                    >
                                        ‼️Unread‼️
                                    </button>
                                </div>
                                <div className="text-gray-500 w-full mb-4">
                                    {data.club}
                                </div>
                                {data.description}
                            </div>
                        )}
                    </div>
                )}
                {numUnread! > 0 ? `${numUnread} announcement(s) unread.` : "All announcements read."}
            </div>
        </div>
    )

}