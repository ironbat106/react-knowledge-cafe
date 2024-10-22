import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    return(
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl'>
            <div>
                <h2 className='text-4xl'>Reading Time: {readingTime}</h2>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {Bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

Bookmarks.propTypes = {}

export default Bookmarks