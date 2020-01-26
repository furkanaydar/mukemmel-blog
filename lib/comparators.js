export function dateComparator(a, b) {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
}
export function likeComparator(a, b) {
    if (a.likes < b.likes) {
        return 1;
    }
    if (a.likes > b.likes) {
        return -1;
    }
    return 0;
}

function sortByNewest(arr) {
    console.log('------>' + arr)
    return arr.sort(dateComparator)
    
}

function sortByOldest(arr) {
    return sortByNewest(arr).reverse()
}

function sortByMostLiked(arr) {
    return arr.sort(likeComparator);
}

export function sortByChoice(arr, choice) {
    console.log(choice)
    if (choice == 0)
        return sortByNewest(arr)
    else if (choice == 1)
        return sortByOldest(arr)
    else
        return sortByMostLiked(arr)
}