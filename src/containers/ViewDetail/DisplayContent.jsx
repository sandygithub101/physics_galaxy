import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import PDF from './PDF';
import Video from './Video';
import Daily_Assignment from './Daily_Assignment';
import Subjective from './Subjective';
import Test from './Test';
import AudioTab from './AudioTab';
import NoteTab from './NoteTab';
import LinkTab from './LinkTab';
import ImageTab from './ImageTab';
import { useRef } from 'react';

export default function DisplayContent({ value }) {
  const [key, setKey] = useState();
  const resetPdfLayerRef = useRef();
  const resetVideoLayerRef = useRef();
  const resetImageLayerRef = useRef();
  const resetLinkLayerRef = useRef();
  const resetNoteLayerRef = useRef();
  const resetAudioLayerRef = useRef();
  const resetTestLayerRef = useRef();
  const resetSubjectiveLayerRef = useRef();
  const resetDAssignmentLayerRef = useRef();
  const handleTabChange = (k) => {
    setKey(k);
    if (resetPdfLayerRef.current) {
      resetPdfLayerRef.current.click();
    }
    if (resetVideoLayerRef.current) {
      resetVideoLayerRef.current.click();
    }
    if (resetImageLayerRef.current) {
      resetImageLayerRef.current.click();
    }
    if (resetLinkLayerRef.current) {
      resetLinkLayerRef.current.click();
    }
    if (resetNoteLayerRef.current) {
      resetNoteLayerRef.current.click();
    }
    if (resetAudioLayerRef.current) {
      resetAudioLayerRef.current.click();
    }
    if (resetTestLayerRef.current) {
      resetTestLayerRef.current.click();
    }
    if (resetSubjectiveLayerRef.current) {
      resetSubjectiveLayerRef.current.click();
    }
    if (resetDAssignmentLayerRef.current) {
      resetDAssignmentLayerRef.current.click();
    }
  };
  useEffect(() => {
    value && value[0].tile_name && setKey(value[0].tile_name)
  }, [value])
  return (
    <div><Tabs
      activeKey={key}
      onSelect={(k) => handleTabChange(k)}
      // className="mb-3 mt-2 px-2 position-relative ul_slide"
      id="ul_slide"
    >{value &&
      value.map((item, i) => {
        return (
          <Tab
            eventKey={item.tile_name}
            title={item.tile_name}
            key={i}>
            {item.type == "pdf" && (
              <PDF value={item} resetRef={resetPdfLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "video" && (
              <Video value={item} resetRef={resetVideoLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "image" && (
              <ImageTab value={item} resetRef={resetImageLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "link" && (
              <LinkTab value={item} resetRef={resetLinkLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "concept" && (
              <NoteTab value={item} resetRef={resetNoteLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "audio" && (
              <AudioTab value={item} resetRef={resetAudioLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "test" && (
              <Test value={item} resetRef={resetTestLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "subjective" && (
              <Subjective value={item} resetRef={resetSubjectiveLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
            {item.type == "daily_assignment" && (
              <Daily_Assignment value={item} resetRef={resetDAssignmentLayerRef} tabName={item.tile_name} is_purchased={'1'} />
            )}
          </Tab>)
      })}
    </Tabs>

    </div>
  )
}
