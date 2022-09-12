let willDoArray = []
let doingArray = []
let doneArray = []

const isNull = (inputdata) => {
  return inputdata ? true : false
}

/**서버에서 내릴 예정 */
const countPlanAmount = (countingList, arr) => {
  countingList.textContent = arr.length
}

const onClick = (event) => {
  //id : do, doing, did
  const { id } = event.target

  //~~~
  switch (id) {
    case "do":
      willDoArray.push()
      break
    case "doing":
      doingArray.push()
      break
    case "did":
      doneArray.push()
      break

    default:
      break
  }
}

const makePlan = (input, list, countingList, arr, a) => {
  const item = document.createElement("div")
  const listTextDiv = document.createElement("div")
  const deleteBtn = document.createElement("button")
  const correctionBtn = document.createElement("button")

  deleteBtn.textContent = "제거"
  correctionBtn.textContent = "수정"

  arr.push(input.value)
  listTextDiv.textContent = input.value
  input.value = ""
  listTextDiv.style.top = "20px"
  item.style.top = "20px"
  listTextDiv.style.backgroundColor = "white"
  listTextDiv.style.cssFloat = "left"
  deleteBtn.style.cssFloat = "left"
  correctionBtn.style.cssFloat = "left"
  listTextDiv.style.width = "188px"
  item.style.backgroundColor = "white"
  item.style.width = "273.5px"
  item.style.border = "5px"
  item.style.height === listTextDiv.style.height

  item.append(listTextDiv)
  item.append(deleteBtn)
  item.append(correctionBtn)
  list.append(item)

  const getParameterData = () => {
    return arr, a
  }

  deleteBtn.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === listTextDiv.textContent) {
        arr.splice(i, 1)
        getParameterData()
        item.remove()
        deleteBtn.remove()
        correctionBtn.remove()
        countPlanAmount(countingList, arr)
      }
    }
  })

  correctionBtn.addEventListener("click", () => {
    if (correctionBtn.textContent === "수정") {
      gsetParameterData()
      localStorage.setItem(a, listTextDiv.textContent)
      listTextDiv.contentEditable = true
      correctionBtn.textContent = "수정완료"
      deleteBtn.style.display = "none"
    } else if (correctionBtn.textContent === "수정완료") {
      if (!isNull(listTextDiv.textContent)) return alert("내용을 입력해주세요.")
      getParameterData()

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === localStorage.getItem(a)) {
          arr.splice(i, 1)
          arr.splice(i, 0, listTextDiv.textContent)
        }
      }

      correctionBtn.textContent = "수정"
      listTextDiv.contentEditable = false
      countPlanAmount(countingList, arr)
      deleteBtn.style.display = "block"
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#willDoPlanBox")
  const Btn = document.querySelector("#willDoBtn")
  const list = document.querySelector("#willDoPlanscroll")
  const countingList = document.querySelector("#willDoCountingBox")

  Btn.addEventListener("click", () => {
    if (!isNull(input.value)) return alert("내용을 입력하세요.")
    makePlan(input, list, countingList, willDoArray, 1)
    countPlanAmount(countingList, willDoArray)
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#doingPlanBox")
  const Btn = document.querySelector("#doingBtn")
  const list = document.querySelector("#doingPlanscroll")
  const countingList = document.querySelector("#doingCountingBox")

  Btn.addEventListener("click", () => {
    if (!isNull(input.value)) return alert("내용을 입력하세요.")
    makePlan(input, list, countingList, doingArray, 2)
    countPlanAmount(countingList, doingArray)
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#donePlanBox")
  const Btn = document.querySelector("#doneBtn")
  const list = document.querySelector("#donePlanscroll")
  const countingList = document.querySelector("#doneCountingBox")

  Btn.addEventListener("click", () => {
    if (!isNull(input.value)) return alert("내용을 입력하세요.")
    makePlan(input, list, countingList, doneArray, 3)
    countPlanAmount(countingList, doneArray)
  })
})
