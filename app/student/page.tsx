"use client";
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { IoIosChatboxes } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/common/header';

export interface StudentDashboardProps {
}

function StudentDashboard(props: StudentDashboardProps){
    const router = useRouter();

    const handleMessagesClick = () => {
      router.push('/messages');
    };

    const handleEditProfileClick = () => {
        router.push('/student/profile');
    }

    return (
        <div className='w-screen h-screen flex flex-col'>
            <div className='sticky top-0 z-10'>
                <Header />
            </div>
            <div className='w-full h-full flex-grow flex items-center justify-center'>
                <div className='flex flex-col'>
                    <div className='flex gap-5 pb-5'>
                        <button onClick={handleMessagesClick}>
                            <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                                <CardContent>
                                    <IoIosChatboxes size={48} />
                                </CardContent>
                                <CardTitle>Messages</CardTitle>
                            </Card>
                        </button>
                        <button>
                            <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                                <CardContent>
                                    <SiGooglemeet size={48} />
                                </CardContent>
                            <CardTitle className=''>Interviews</CardTitle>
                            </Card>
                        </button>
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={handleEditProfileClick}>
                            <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                                <CardContent>
                                    <FaEdit size={48} />
                                </CardContent>
                                <CardTitle>Edit Profile</CardTitle>
                            </Card>
                        </button>
                        <button>
                            <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                                <CardContent>
                                    <MdInsights size={48} />   
                                </CardContent>
                                <CardTitle>Insights</CardTitle>
                            </Card>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentDashboard;
