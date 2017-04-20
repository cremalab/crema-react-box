import React from 'react'
import Box from '.'
import { shallow } from 'enzyme'

describe('Box', () => {

  it('renders',
    () => expect(shallow(<Box />).length).toBe(1)
  )

  describe('structure', () => {

    const wrapper = shallow(
      <Box>
        <Box/>
        <Box/>
        <Box/>
        { null }
      </Box>
    )

    it('renders BoxContainer',
      () => {
        const actual = wrapper.find('BoxContainer')
          .first()
          .length
        expect(actual).toBe(1)
      }
    )

    it('renders BoxContainer/BoxSpacerOffset',
      () => {
        const actual = wrapper
          .find('BoxSpacerOffset')
          .length
        expect(actual).toBe(1)
      }
    )

    it('renders BoxContainer/BoxSpacerOffset/BoxSpacer',
      () => {
        const actual = wrapper
          .find('BoxSpacer')
          .length
        expect(actual).toBe(3)
      }
    )

    it('renders children',
      () => {
        const actual = wrapper.find('Box').length
        expect(actual).toBe(3)
      }
    )

    it('does not render `null` child',
      () => {
        const actual = wrapper.find('Box').length
        expect(actual).toBe(3)
      }
    )

  })

  describe('props', () => {

    it('non-style props are passed to BoxContainer only',
      () => {
        const BoxContainer = shallow(
          <Box
            padding='20px'
            onClick={true}
          >
            <Box/>
          </Box>
        )

        const BoxSpacerOffset = BoxContainer.find('BoxSpacerOffset')
        const BoxSpacer       = BoxSpacerOffset.find('BoxSpacer')

        expect(BoxContainer.prop('onClick')).toBeTruthy()
        expect(BoxSpacerOffset.prop('onClick')).toBeFalsy()
        expect(BoxSpacer.prop('onClick')).toBeFalsy()
      }
    )

  })

})
