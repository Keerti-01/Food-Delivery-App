import React,{useState} from "react"
import ImageViewer from "react-simple-image-viewer";

//compoenets
import PhotoCollection from "../../Components/restuarant/PhotosCollection"

const Photos = (props) => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/9/19088969/4ee141ba3cba9d3f5738bb8328430985_o2_featured_v2.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/pictures/7/19847477/762ba2f102b948306f2b223247450b64_o2_featured_v2.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/pictures/0/19035990/94ce23a8e7bf7f66793c22f5fe4fd4b9_o2_featured_v2.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/pictures/5/19082705/b8c7e1aa94cb74bb45a7b23a22b022e5_o2_featured_v2.jpg?output-format=webp"
    ])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [CurrentImg, setCurrentImg] = useState(0)
    const closeViewer = () => setIsMenuOpen(false)
    const openViewer = () => setIsMenuOpen(true)

    return(
        <>
        {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
        <div className="flex flex-wrap gap-2">
            {
                photos.map((photo) =>(
                    <PhotoCollection image={photo} openViewer={openViewer} />
                ))
            }
        </div>
        </>
    )
}

export default Photos;