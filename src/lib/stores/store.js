import { browser } from "$app/environment"
import { writable } from "svelte/store"

//search token for getting listings by title
export const getByTitles = writable('Ardvark')
