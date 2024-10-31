import React from 'react'

const Table = () => {
  return (
    
<div className="border rounded-lg w-full">
  <div className="relative w-full overflow-auto">
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&amp;_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
              Name
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
              Surname
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
              Age
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
            الحالة
            </th>
            <th className="h-12 px-2 text-left  font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
            ادارة مستخدم
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="[&amp;_tr:last-child]:border-0">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">John</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Doe</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">35</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">john@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                Yes
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Jane</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Smith</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">28</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">jane@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                No
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Bob</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Johnson</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">42</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">bob@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                Yes
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Alice</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Williams</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">31</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">alice@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                No
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Michael</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Brown</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">39</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">michael@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                Yes
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Emily</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Davis</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">27</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">emily@example.com</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div
                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                data-v0-t="badge"
              >
                No
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default Table