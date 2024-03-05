export async function fetchDummyData() {
  try {
    const response = await fetch('/dummy-data.json')
    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.')
    }
    return await response.json()
  } catch (err) {
    return err
  }
}
