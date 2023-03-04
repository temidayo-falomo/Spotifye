import React from "react";

function Explore() {
  return;
  // <div>
  //         <StyledPlaylistInfo>
  //     <div
  //       className="her-bg"
  //       style={{
  //         backgroundColor: colors ? colors[0] : "#000",
  //       }}
  //     >
  //       <Navbar />
  //       <div className="extractor-holder">
  //         <ColorExtractor getColors={getColors}>
  //           <img
  //             src={playlist.picture_xl}
  //             style={{ width: 0, height: 0 }}
  //             alt="sample"
  //           />
  //         </ColorExtractor>
  //       </div>

  //       <div className="row main center gap-1 top-holder">
  //         <div
  //           className="cover-img img-def"
  //           style={{
  //             backgroundImage: `url(${playlist?.picture_xl})`,
  //           }}
  //         ></div>
  //         <div className="col gap-1">
  //           <span>PLAYLIST</span>
  //           <h1>{playlist?.title}</h1>
  //           {playlist?.tracklist?.length > 0 && (
  //             <p>
  //               {playlist?.tracklist
  //                 ?.slice(0, 3)
  //                 .map((song: any, index: number) => {
  //                   return <span key={index}>{song?.artist.name}, </span>;
  //                 })}
  //               & {playlist?.tracklist?.length} more
  //             </p>
  //           )}
  //         </div>
  //       </div>
  //     </div>

  //     {/* <div className="row mid center">
  //     <div className="play">
  //       <FaPlay />
  //     </div>

  //     <FiHeart className="pointer" />

  //     <SlOptions className="pointer" />
  //   </div> */}

  //     <PlayTrackMid allSongs={playlist?.tracklist} />

  //     <div className="col gap-5">
  //       {playlist?.tracklist?.map((song: any, index: number) => {
  //         return <SongCardRow song={song} index={index} key={index} />;
  //       })}
  //     </div>
  //   </StyledPlaylistInfo>
  // </div>
}

export default Explore;
