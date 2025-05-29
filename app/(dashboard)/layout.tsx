import DesktopSidebar from '@/components/Sidebar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='felx h-screen'>
            <DesktopSidebar />
            <div className='flex flex-col flex-1 min-h-screen'>
                <header className='flex items-center justify-between px-5 py-4 h-[50px] container'>
                    ScrapFlow
                </header>
                <Separator>
                    <div className='flex-1 container py-4 text-accent-foreground'>
                        {children}
                    </div>
                </Separator>
            </div>
        </div>
    )
}

export default layout