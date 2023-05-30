function selectionSort(arr){
    for(let i = 0; i < arr.length; i++)
    {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[minIndex] > arr[j]){
                minInedx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
} // 선택 정렬

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr.length - i; j++)
        {
            if (arr[j] < arr[j + 1])
            {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }        
        }
    }
} // 버블 정렬

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++)
    {
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j - 1])
            {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else
                break;
        }
    }
}

function merge(arr, left, mid, right){
    let i = left;
    let j = mid + 1;
    let k = left;
    while (i <= mid && j <= right)
    {
        if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
        else sorted[k++] = arr[j++];
    }
    if (i > mid)
    {
        for (; j<=right;j++) sorted[k++] = arr[j];
    }
    else {
        for (; i <= mid; i++) sorted[k++] = arr[i];
    }
    for (let x = left; x <= right; x++)
    { arr[x] = sorted[x]};
}
function mergeSort(arr, left, right)
{
    if (left < right)
    {
        let mid = parseInt((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}