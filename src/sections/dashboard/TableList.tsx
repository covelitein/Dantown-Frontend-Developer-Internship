'use client'

import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'
import { RankingTable } from './RankingTable'
  

export default function TableList() {
  return (
    <div className='mt-10 sm:pr-5 pr-1 pl-1'>
      <Card className='border-none rounded-xl overflow-hidden'>
        <CardHeader>
            <h3 className="text-lg font-semibold">Friends Rank</h3>
            <RankingTable />
        </CardHeader>
      </Card>
    </div>
  )
}
