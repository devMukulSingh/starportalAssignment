import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div
      className="
      flex
    bg-neutral-900
     items-center 
     border
     border-neutral-900 
     px-5
     rounded-full
     gap-2
     w-[20rem]
     "
    >
      <Search className='text-neutral-500'/>
      <Input
        className="
        bg-neutral-900 
        border-none 
        !focus:outline-none
        focus:visible:outline-none
        focus:border-none
        p-0
        "
        placeholder="Search for ecosystem, trending quests, etc..."
      />
    </div>
  );
}

export default SearchBar