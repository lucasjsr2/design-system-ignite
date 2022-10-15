import { colors, fontSizes } from '@ignite-ui/tokens'
import React from 'react'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 2.5 ? '#000' : '#FFF',
          }}
        >
          <strong style={{ fontSize: fontSizes.sm }}>${key}</strong>
        </div>
      </div>
    )
  })
}
