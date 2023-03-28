"use client";

function MovieID({ params }: { params: { pid: string } }) {
  return <div>Filme ID = {params.pid}</div>;
}

export default MovieID;
