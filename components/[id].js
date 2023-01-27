// import { supabase } from "./api/client";

import { useEffect, useState } from "react";

// export async function getStaticPaths() {
//   let { data: cveCategory, error } = await supabase
//     .from("cveCategory")
//     .select("*");

//   const paths = cveCategory.map((element) => {
//     return {
//       params: { id: element.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
export default function FlashCard() {
  const [myId, setMyId] = useState();
  useEffect(() => {
    setMyId(window.location.search);
  }, []);
  const urlParams = new URLSearchParams(myId);
  const id = urlParams.get("id");
  console.log(id);

  return <>Flashcard page {id}</>;
}
