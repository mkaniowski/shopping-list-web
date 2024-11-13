import { QuickStartCard } from '@/views/home/components/QuickStartCard'
import { RecentListsCard } from '@/views/home/components/RecentListsCard'
import { useGetShoppingLists } from '@/shared/shoppingQueries'

const Home = () => {
  const { data } = useGetShoppingLists()

  return (
    <div className='w-full full-height-p-8 flex p-8 gap-x-8 '>
      <QuickStartCard />
      <RecentListsCard />
    </div>
  )
}

export default Home
