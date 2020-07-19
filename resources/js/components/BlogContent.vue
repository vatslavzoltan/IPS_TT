<template>
    <main class="blog__content">
        <styled-header v-on:heightToParent="getHeaderHeight" :value="articleHeader"></styled-header>
        <p>
        How do you capture more interesting travel photos with your iPhone?
        How do you avoid taking the same cliché vacation photos that everyone else takes?
        I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel.
        In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip.
        Read on to discover how to take better travel photos with your iPhone!
        </p>
        <scaled-image
        :image1x="require(`../../assets/img/img.jpg`)"
        :image2x="require(`../../assets/img/img@2x.jpg`)"
        :image3x="require(`../../assets/img/img@3x.jpg`)"
        class="blog__image"
        :alt='articleHeader'
        ></scaled-image>
        <h3
        class="blog_sub-header"
        >1. Research Your Destination To Find The Best Photo Opportunities</h3>
        <p>Before your trip, I recommend researching the destination to find the most interesting photo opportunities.</p>
        <p>I always research the location I’m traveling to. I do this extensively and obsessively!</p>
        <p>It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures.</p>
        <p>So, what kind of research can you do?</p>
        <p>First, you could search for photos that other people have taken at the locations you’re planning to visit.</p>
        <p>Search on Instagram or Google to get an idea of the kinds of photos people take there.</p>
        <h3
        class="blog_sub-header"
        >2. Capture Your Journey To Tell The Complete Story Of Your Travels</h3>
        <p>Travel photography isn’t just about photographing the destination.</p>
        <p>For a more complete photographic story, capture your journey to and from the location you’re visiting.</p>
        <p>If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller.</p>
        <p>And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re flying above.</p>
        <p>Your journey will often involve several different types of transport. And they all offer great photo opportunities.</p>
        <p>Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos.</p>
    </main>
</template>

<script>
export default {
    props: ["articleHeader"],
    methods: {
        getHeaderHeight(value) {
            this.$emit('heightToParent', value)
        }
    }
}
</script>