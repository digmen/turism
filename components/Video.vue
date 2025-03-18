<template>
    <section class="container">
        <article class="video-container">
            <div class="video" @mouseenter="showControls" @mouseleave="hideControls">
                <video ref="video" src="/assets/video/video.mp4" muted loop @play="isPlaying = true"
                    @pause="isPlaying = false" :title="$t('video.alt')" :aria-label="$t('video.alt')"></video>
                <div class="controls" v-if="controlsVisible">
                    <button v-if="!isPlaying" @click="playVideo" :aria-label="$t('video.playVideo')">
                        <img src="/assets/images/play.svg" :alt="$t('video.play')">
                    </button>
                    <button v-if="isPlaying" @click="stopVideo" :aria-label="$t('video.pauseVideo')">
                        <img src="/assets/images/stop.svg" :alt="$t('video.stop')">
                    </button>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const controlsVisible = ref(false);
const isPlaying = ref(false);

const playVideo = () => {
    video.value?.play();
};

const stopVideo = () => {
    video.value?.pause();
};

const showControls = () => {
    controlsVisible.value = true;
};

const hideControls = () => {
    controlsVisible.value = false;
};

const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
        video.value?.play();
    } else {
        video.value?.pause();
    }
};

onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.value?.play();
            } else {
                video.value?.pause();
            }
        });
    });
    if (video.value) {
        observer.observe(video.value);
    }
});

onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
});

useHead({
    title: 'Видео - Awesome Travel / Video - Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Просмотрите наше видео, чтобы узнать больше о наших турах и услугах. / Watch our video to learn more about our tours and services.'
        },
        {
            name: 'keywords',
            content: 'видео, туры, путешествия, видео туры, video, tours, travel, video tours'
        },
        {
            property: 'og:title',
            content: 'Видео - Awesome Travel / Video - Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Просмотрите наше видео, чтобы узнать больше о наших турах и услугах. / Watch our video to learn more about our tours and services.'
        },
        {
            property: 'og:image',
            content: 'https://example.com/video-thumbnail.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/video'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Видео - Awesome Travel / Video - Awesome Travel'
        },
        {
            name: 'twitter:description',
            content: 'Просмотрите наше видео, чтобы узнать больше о наших турах и услугах. / Watch our video to learn more about our tours and services.'
        },
        {
            name: 'twitter:image',
            content: 'https://example.com/video-thumbnail.jpg'
        }
    ]
});
</script>

<style scoped>
.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video {
    margin-top: 56px;
    width: 931px;
    height: 475px;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
}

.video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.controls {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.controls button {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 1s ease;
}

.controls button:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 1s ease;
}

@media (max-width: 1025px) {
    .video {
        margin-top: 125px;
    }
}
</style>
