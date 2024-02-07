<template>
    <div class="dropdown-overlay-close" v-if="isOpened && !disabled" @click="isOpened = false"></div>
    <div class="dropdown" :class="{ 'active' : isOpened, 'disabled' : disabled}">
        <button class="dropbtn par-6" :disabled="disabled"  :class="selectedOption ? 'color-blue-200' : ''" @click="isOpened = !isOpened">{{ selectedOption ? selectedOption : title }}
            <img class="chevron-down" :src="`/icons/small/Icon_Chevron_Down_16.svg`"/>
        </button>
        <div class="dropdown-one">
            <template v-for="item in optionsArray">
                <div class="dItem par-6" href="#" @click="selectedOption = item, $emit('select', selectedOption), isOpened = false">{{ item }}
            </div>
            </template>
        </div>
    </div>
</template>
<script lang='ts' setup>

const selectedOption = ref()
const isOpened = ref(false)

type Props = {
    optionsArray: string[] | string,
    disabled: boolean,
    title: string,
}

defineProps<Props>();
</script>
<style lang='scss' scoped>


.dropdown-overlay-close {
    display: flex;
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 100%;
}

.dropdown {
    position: relative;
    max-width: 28.8rem;
    width: 28.8rem;
    box-sizing: border-box;
}

.dropdown.disabled {
    cursor: not-allowed;
    .dropbtn {
        cursor: not-allowed;
        color: $gray-300;
        &:hover {
            background-color: white;
        }
        .chevron-down {
            opacity: 0.4;
        }
    }
}

.dropdown .dropbtn {
    border: none;
    outline: none;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    padding: 1.2rem 0.8rem;
    background-color: white;
    border-radius: 0.8rem;
    margin: 0;
    justify-content: space-between;
}

.dropdown.active .dropbtn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.dropbtn:hover {
    background-color: $blue-100;
    cursor: pointer;
}

.dropdown-one {
    z-index: 1;
    max-height: 19.2rem;
    overflow-y: scroll;
    cursor: pointer;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    background-color: white;
    width: 100%;
    max-width: 100%;
}

.dropdown-one::-webkit-scrollbar {
    width: 0.4rem;
}

.dropdown-one::-webkit-scrollbar-thumb {
    background-color: $gray-300;
    border-radius: 0.2rem;
}

.dropdown-two {
    cursor: pointer;
    display: none;
    position: relative;
    top: 0px;
    min-width: 160px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown.active .dropdown-one,
#link1:hover>.dropdown-two {
    display: block;
}


.dropdown-one .dItem {
    color: black;
    display: block;
    text-align: left;
    padding: 1.2rem 0.8rem;
}

.dropdown-one .dItem:hover {
    background-color: $blue-100;
}

.dropdown-one .dItem:last-of-type {
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
}
</style>