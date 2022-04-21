const imageSizes = [
  { name: "horizontal", width: 600, height: 380 },
  { name: "vertical", width: 400, height: 650 },
  { name: "thumbnail", width: 300, height: 300 },
]

imageSizes.map((a) => {
  const capitalizedName = a.name[0].toUpperCase() + a.name.slice(1)
  return `${capitalizedName} image - ${a.width} x ${a.height}`
})


export const stringifImagesSize = (imageSizes) => {
  return imageSizes.map((a) => {
    const captalizedName = a.name[0].toUpperCase() + a.name.slice(1)
    return `${captalizedName} image - ${a.width} x ${a.height}`
  })
}
