export type Video = {
  _createdAt: Date;
  _id: string;
  _rev?: string;  
  _type: "mux.videoAsset";
  _updatedAt: Date;
  assetId: string;
  data: {
    aspect_ratio: string;
    created_at: string;
    duration: number;
    id: string;
    master_access: string;
    max_stored_frame_rate: number;
    max_stored_resolution: string;
    mp4_support: string;
    passthrough: string;
    playback_ids: {
      id: string;
      policy: string;
    }[];
    status: string;
    tracks: {
      duration: number;
      id: string;
      max_channel_layout?: string;
      max_channels?: number;
      max_frame_rate?: number;
      max_height?: number;
      max_width?: number;
      type: string;
    }[];
  };
  filename?: string; 
  playbackId: string;
  status?: string; 
  url?: string;
  name?: string;
};
