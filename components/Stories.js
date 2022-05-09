import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Sonny Sangha",
        src: "/storycard/img1.png",
        profile: "/storycard/simg1.png",
    },
    {
        name: "Elon Musk",
        src: "/storycard/img2.png",
        profile: "/storycard/simg2.png",
    },
    {
        name: "Jeff Bezoz",
        src: "/storycard/img3.png",
        profile: "/storycard/simg3.png",
    },
    {
        name: "Mark Zuckerberg",
        src: "/storycard/img4.png",
        profile: "/storycard/simg4.png",
    },
    {
        name: "Bill Gates",
        src: "/storycard/img5.png",
        profile: "/storycard/simg5.png",
    }

]



export default function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
            {stories.map((story) =>
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile} />
            )}

        </div>
    )
}