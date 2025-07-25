import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '../components/data-table-view-options'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

const versionOptions = [
  { label: 'v0.1.1', value: 'v0.1.1' },
  { label: 'v0.1.2', value: 'v0.1.2' },
  { label: 'v0.1.3', value: 'v0.1.3' },
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter prompt name...'
          value={
            (table.getColumn('prompt_name')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('prompt_name')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />

        <div className='flex gap-x-2'>
          {table.getColumn('latest_version') && (
            <DataTableFacetedFilter
              column={table.getColumn('latest_version')}
              title='Version'
              options={versionOptions}
            />
          )}
        </div>

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
