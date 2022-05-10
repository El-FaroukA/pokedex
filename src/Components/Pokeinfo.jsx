import React from 'react'

const Pokeinfo = ({data}) => {
    console.log(data)
  return (
    <>
    {
        (!data) ? <h2>Choose a pokemon to see his attributs</h2>: (
            <>
                <h1>{data.name}</h1>
                <img src={data.sprites.other.dream_world.front_default} alt="" />
                <div className="types">
                    {
                        data.types.map(poke=>{
                            return(
                                <>
                                    <div className="type">
                                        <h2>{poke.type.name}</h2>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="abilities">
                    <div className="group">
                        {
                            data.abilities.map(poke=>{
                                return(
                                <>
                                    <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                </>)
                                
                            })
                        }
                    </div>
                </div>
                
                <div className="base-stat">
                    {
                        data.stats.map(poke=>{
                            return (
                                <>
                                    <h3>{poke.stat.name}: {poke.base_stat}</h3>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }
        
    </>

  )
}

export default Pokeinfo