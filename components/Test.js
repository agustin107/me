export function Test({ color }) {
  return (
    <div id="test">
      Test

      <style jsx>{`
        div {
          color: ${color};
        }
      `}</style>
    </div>
  )
}